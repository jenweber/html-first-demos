import React from "react";
import Code from "./Code";
import Reveal from "./Reveal";

const onClick = () => {
  alert("Clicked");
};

function ClickHereV1() {
  return (
    <div onClick={onClick} className="my-button">
      Click here
    </div>
  );
}

function ClickHereCodeV1() {
  const exampleCode = `<div onClick={onClick}>
  Click here
</div>`;

  return <Code exampleCode={exampleCode} />;
}

function ClickHereAnswerV1() {
  return (
    <Reveal>
      This button is not accessible, because it is not a real button. Clicks
      should be attached to elements like buttons, so that you get automatic
      keyboard navigation. As it is here, you cannot use a keyboard to interact
      with it, and screen reader software cannot tell that it is interactive. It
      would take a lot of extra work to replicate the automatic features of
      buttons. Try using tab to navigate a page and find things that have broken
      interactions.
    </Reveal>
  );
}

function ClickHereV2({ mode }) {
  return (
    <button onClick={onClick} className="my-button">
      {mode === "save" ? "Save" : "Cancel"}
    </button>
  );
}

function ClickHereCodeV2() {
  const exampleCode = `
<!-- In the template where you use the component -->
<MyButton onClick={onClick} mode="save">

<!-- MyButton -->
<div onClick={onClick} className="my-button">
  {mode === "save" ? "Save" : "Cancel"}
</div>`;

  return <Code exampleCode={exampleCode} />;
}

function ClickHereAnswerV2() {
	const exampleCode = `
<!-- In the template where you use the component -->
<MyButton onClick={onClick}>
  Save
</MyButton>

<!-- MyButton -->
<div onClick={onClick} className="my-button">
  {children}
</div>`;

	return (
	  <Reveal>
		It is best to avoid adding "modes" to your components.
		They have a tendency to make it so that only JavaScript
		developers can read the template and understand what is going on,
		because there is so much logic involved.

		Instead, try passing in the display text as a child:

		<Code exampleCode={exampleCode} />

		This way, someone who is reading the template sees something that looks
		a lot like a regular button. Although it is not HTML, it fits into their understanding of HTML.
	  </Reveal>
	);
  }

export default function Mistakes() {
  return (
    <div>
      <p>
        Can you spot the things that could be improved? Look for problems with
        HTML markup validity, accessibility, readability, complexity, etc.
      </p>

      <h3>Button click v1</h3>
      <ClickHereV1 />
      <ClickHereCodeV1 />
      <ClickHereAnswerV1 />

      <h3>Button click v2</h3>
      <ClickHereV2 mode="cancel" />
      <ClickHereCodeV2 />
	  <ClickHereAnswerV2 />
    </div>
  );
}
