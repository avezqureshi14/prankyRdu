import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [updatedDescription, setUpdatedDescription] = useState('');

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = () => {
    axios
      .get('http://localhost:8800/announcements')
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteAnnouncement = () => {
    if (selectedAnnouncement) {
      axios
        .delete(`http://localhost:8800/announcements/${selectedAnnouncement._id}`)
        .then(() => {
          setAnnouncements((prevAnnouncements) =>
            prevAnnouncements.filter(
              (announcement) => announcement._id !== selectedAnnouncement._id
            )
          );
          setDeleteModalVisible(false);
          setSelectedAnnouncement(null);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const openDeleteModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setSelectedAnnouncement(null);
    setDeleteModalVisible(false);
  };

  const openUpdateModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setUpdatedDescription(announcement.description);
    setUpdateModalVisible(true);
  };

  const closeUpdateModal = () => {
    setSelectedAnnouncement(null);
    setUpdatedDescription('');
    setUpdateModalVisible(false);
  };

  const updateAnnouncement = () => {
    if (selectedAnnouncement) {
      axios
        .put(`http://localhost:8800/announcements/${selectedAnnouncement._id}`, {
          description: updatedDescription,
        })
        .then((response) => {
          setAnnouncements((prevAnnouncements) =>
            prevAnnouncements.map((announcement) =>
              announcement._id === selectedAnnouncement._id
                ? { ...announcement, description: updatedDescription }
                : announcement
            )
          );
          closeUpdateModal();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <Button type="primary" style={{ marginBottom: '1rem' }}>
        <Link to="/announcCreate">New Announcement</Link>
      </Button>
      {announcements.map((announcement) => (
        <Card key={announcement._id} title={announcement.topic}>
          <p>{announcement.description}</p>
          <strong>
            Date Created: {new Date(announcement.dateCreated).toLocaleDateString()}
          </strong>
          <Button style={{marginLeft:'1rem'}} type="primary" onClick={() => openUpdateModal(announcement)}>
            Update
          </Button>
          <Button style={{marginLeft:'1rem'}} type="primary" onClick={() => openDeleteModal(announcement)}>
            Delete
          </Button>
        </Card>
      ))}
      <Modal
        visible={deleteModalVisible}
        onCancel={closeDeleteModal}
        onOk={deleteAnnouncement}
        title="Confirm Delete"
      >
        <p>Are you sure you want to delete this announcement?</p>
      </Modal>
      <Modal
        visible={updateModalVisible}
        onCancel={closeUpdateModal}
        onOk={updateAnnouncement}
        title="Update Announcement"
      >
        <p>
          Description:
          <br />
          <textarea
            rows={4}
            cols={50}
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        </p>
      </Modal>
    </div>
  );
};

export default AnnouncementList;
