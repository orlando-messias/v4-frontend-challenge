import React, { FormEvent, useState, useContext } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';

import api from '../../services/api';
import { ModalContainer, ModalForm } from './style';
import { AppContext } from '../../context/AppContext';

interface ModalProps {
  showModal: Boolean;
  setShowModal: Function;
  tools: Tool[];
};

export interface Tool {
  title: string;
  link: string;
  description: string;
  tags: string[];
};

// renders a modal to add a new tool. The styles here were applied using styled components
const ModalAdd: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  const { onAdd, setOnAdd, user } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  // saves the values of the states title, link, description and tags to DB using the post route /tools
  async function handleCreateTool(e: FormEvent) {
    e.preventDefault();
    const newTags = tags.split(' ');
    console.log(tags);
    
    if (description.length < 10 || description.length > 200) {
      toast.error('Description must be between 10 and 200 characters long');
      return;
    }

    if (tags === ' ' || tags === '') {
      toast.error('Empty tag');
      return;
    }

    api.post('/tools', {
      title,
      link,
      description,
      tags: newTags
    }, { headers: { Authorization: `Bearer ${user?.token}` } }).then(() => {
      toast.success('Tool was successfully added');
      setShowModal(false);
      setTags('');
      setOnAdd(!onAdd);
    }).catch((error) => {
      (error.response.status === 401) ?
        toast.error('You must login to add a new tool') :
        toast.error(error.response.data.message);
    });
  };

  return (
    <div>
      {showModal &&
        <ModalContainer>
          <ModalForm onSubmit={handleCreateTool}>
            <div className="modal-title">
              <span><FaPlus /></span>
              <span>Add New Tool</span>
            </div>

            <h4 className="title" placeholder="" >Title</h4>
            <input
              type="text"
              required
              placeholder="Tool title"
              autoFocus
              onChange={(e) => { setTitle(e.target.value) }}
            />

            <h4 className="title" >Link</h4>
            <input
              type="url"
              required
              placeholder="https://www.domain.com"
              onChange={(e) => { setLink(e.target.value) }}
            />

            <h4 className="title" >Description</h4>
            <textarea
              required
              placeholder="Type the description of the tool..."
              onChange={(e) => { setDescription(e.target.value) }}
            />

            <h4 className="title" >Tags</h4>
            <input
              type="text"
              placeholder="tags"
              onChange={(e) => { setTags(e.target.value) }}
            />

            <div className="buttons">
              <button type="button" className="cancel" onClick={() => setShowModal(false)} >
                <IoClose className="icon" /><span>Cancel</span>
              </button>
              <button type="submit">
                <FaPlus /> <span>Add</span>
              </button>
            </div>
          </ModalForm>
        </ModalContainer>
      }
    </div>
  );
};

export default ModalAdd;