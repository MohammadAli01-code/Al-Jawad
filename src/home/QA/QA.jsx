import { useState } from "react";
import { alJawadQA } from "./data";
import Questions from "./Questions";

function QA() {
  const [questions, setQuestions] = useState(alJawadQA);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
}

export default QA;
