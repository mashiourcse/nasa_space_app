export default function ChatbotCustomMsg({ onButtonPress }) {
    function buttonHandler(msg) {
      onButtonPress(msg);
    }
  
    return (
      <>
        <div className="">
          <button
            className="btn btn-outline-success m-1 fw-bold"
            style={{ fontSize: "15px" }}
            onClick={() => buttonHandler("I want to ask a question!")}
          >
            I want to ask a question!
          </button>
          <button
            className="btn btn-outline-success m-1 fw-bold"
            style={{ fontSize: "15px" }}
            onClick={() => buttonHandler("Who are you?")}
          >
            Who are you?
          </button>
          <button
            className="btn btn-outline-success m-1 fw-bold"
            style={{ fontSize: "15px" }}
            onClick={() => buttonHandler("What is Exosky?")}
          >
            What is Exosky?
          </button>
          <button
            className="btn btn-outline-success m-1 fw-bold"
            style={{ fontSize: "15px" }}
            onClick={() => buttonHandler("What do you know about this planet?")}
          >
            What do you know about this planet?
          </button>
          <button
            className="btn btn-outline-success m-1 fw-bold"
            style={{ fontSize: "15px" }}
            onClick={() => buttonHandler("What is the difference between Star and Planet?.")}
          >
            What is the difference between Star and Planet?
          </button>
        </div>
      </>
    );
  }
  