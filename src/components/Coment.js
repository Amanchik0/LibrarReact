import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

import "./Comment.css"; 

const getStoredComments = () => {
  const storedComments = localStorage.getItem("comments");
  return storedComments ? JSON.parse(storedComments) : [];
};

const setStoredComments = (comments) => {
  localStorage.setItem("comments", JSON.stringify(comments));
};

const Comment = () => {
  const [comments, setComments] = useState(getStoredComments);
  const [commentText, setCommentText] = useState("");
  const [commenterName, setCommenterName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);

  useEffect(() => {
    setStoredComments(comments);
  }, [comments]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (editingCommentId !== null) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === editingCommentId
            ? { ...comment, description: commentText, name: commenterName }
            : comment
        )
      );
      setEditingCommentId(null);
    } else {
      const newComment = {
        id: comments.length + 1,
        description: commentText,
        img: [],
        name: commenterName,
      };
      setComments([newComment, ...comments]);
    }

    setCommentText("");
    setCommenterName("");
  };

  const handleEditComment = (id) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    if (commentToEdit) {
      setCommentText(commentToEdit.description);
      setCommenterName(commentToEdit.name);
      setEditingCommentId(id);
    }
  };

  const handleDeleteComment = (id) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== id)
    );
  };

  return (
    <div className="comments-section container">
    <h2 className="text-center mb-5 text-uppercase fw-bold fs-1 custom-heading">
      Comments
    </h2>
    <Form onSubmit={handleCommentSubmit} >
      <FormGroup className="mb-3">
        <FormLabel htmlFor="commentText" className="custom-label">
          Your Comment:
        </FormLabel>
        <FormControl
          id="commentText"
          placeholder="Enter your comment here"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel htmlFor="commenterName" className="custom-label">
          Your Name:
        </FormLabel>
        <FormControl
          type="text"
          id="commenterName"
          placeholder="Enter your name"
          value={commenterName}
          onChange={(e) => setCommenterName(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" variant="success" className="custom-button">
        {editingCommentId !== null ? "Save Changes" : "Submit Comment"}
      </Button>
    </Form>

    <div className=" g-4 mt-4 w-200">
      {comments.map((comment) => (
        <div key={comment.id} className="col-lg-6">
          <Card className="h-100 shadow custom-card m-4 w-200">
            <CardBody>
              <div className="p-4">
                <CardText>{comment.description}</CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex justify-content-between align-items-center custom-footer">
              <div className="d-flex align-items-center">
                <CardTitle className="text-success custom-title">
                  {comment.name}
                </CardTitle>
              </div>
              <div>
                <Button
                  variant="primary"
                  size="sm"
                  className="me-2 custom-edit-button"
                  onClick={() => handleEditComment(comment.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  className="custom-delete-button"
                  onClick={() => handleDeleteComment(comment.id)}
                >
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Comment;
