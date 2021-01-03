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

export const ModalAdd: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  const { onAdd, setOnAdd, user } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  function handleCreateTool(e: FormEvent) {
    e.preventDefault();
    const newTags = tags.split(' ');

    api.post('/tools', {
      title,
      link,
      description,
      tags: newTags
    }, { headers: { Authorization: `Bearer ${user?.token}` } }).then(() => {
      toast.success('Tool was successfully added');
      setShowModal(false);
      setOnAdd(!onAdd);
    }).catch(() => {
      toast.error('You must login to add a new tool');
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
              required
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