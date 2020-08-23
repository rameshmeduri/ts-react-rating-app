import React, { Fragment, useState } from 'react';
import { Alert, Form, Button } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import Rating from './Rating';

const App = () => {
  const [emoji, setEmoji] = useState(true);
  const [rating, setRating] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [tellUsMore, setTellUsMore] = useState(false);
  const [finalMsg, setFinalMsg] = useState(false);
  return (
    <Fragment>
      {emoji && (
        <section
          id="emoji-box"
          onClick={() => {
            setRating(true);
          }}>
          <span className="emoji" role="img" aria-label="Smile Emoji">
            🙂
          </span>
          <span className="help-us">Help us improve</span>
        </section>
      )}

      {/* Rating Modal */}
      <CSSTransition
        in={rating}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setEmoji(false)}>
        <Alert
          className="rt-alert-box"
          variant="secondary"
          dismissible
          onClose={() => {
            setRating(false);
            setEmoji(true);
          }}>
          <Rating
            name="rating"
            rscale="6"
            onRating={() => {
              setThankYou(true);
              setRating(false);
            }}
          />
        </Alert>
      </CSSTransition>

      {/* ThankYou Modal */}
      <CSSTransition
        in={thankYou}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setEmoji(false)}>
        <Alert
          className="rt-alert-box"
          variant="secondary"
          dismissible
          onClose={() => {
            setThankYou(false);
            setEmoji(true);
          }}>
          <h6>
            <span className="emoji" role="img" aria-label="Smile Emoji">
              🙂
            </span>
            <span
              className="tell-us-more-text"
              onClick={() => {
                setTellUsMore(true);
                setThankYou(false);
              }}>
              Thank you, tell us more!
            </span>
          </h6>
        </Alert>
      </CSSTransition>

      {/* Tell us more Modal */}
      <CSSTransition
        in={tellUsMore}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setEmoji(false)}>
        <Alert
          className="rt-alert-box"
          variant="secondary"
          dismissible
          onClose={() => {
            setTellUsMore(false);
            setEmoji(true);
          }}>
          <Alert.Heading className="p-3 mb-2 bg-dark text-white rounded">How's it going?!</Alert.Heading>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>what did you like most?</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Tell us your experience?(optional)"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea2">
              <Form.Label>what did you like least?</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Let us know how we can improve(optional)"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Your email</Form.Label>
              <Form.Control type="email" placeholder="a@a.com(optional)" />
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setFinalMsg(true);
                setTellUsMore(false);
              }}>
              Submit
            </Button>
          </Form>
        </Alert>
      </CSSTransition>

      {/* finalMsg Modal */}
      <CSSTransition
        in={finalMsg}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setEmoji(false)}>
        <Alert
          className="rt-alert-box"
          variant="secondary"
          dismissible
          onClose={() => {
            setFinalMsg(false);
            setEmoji(true);
          }}>
          <h6>Thank you!</h6>
          <h6>Your feedback is valuable to us.</h6>
        </Alert>
      </CSSTransition>
    </Fragment>
  );
};

export default App;