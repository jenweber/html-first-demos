import React, { useState } from "react";
import Code from "./Code";
import Reveal from "./Reveal";

const onClick = () => {
  alert("Clicked");
};

const logEvent = () => {};

const setClicked = () => {};

function ClickHereV1() {
  return (
    <div onClick={onClick} className="my-button">
      Click here
    </div>
  );
}

function ClickHereCodeV1() {
  const exampleCode = `
<div onClick={onClick}>
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
<MyButton onClick={onClick} mode="cancel">

<!-- MyButton -->
<button onClick={onClick} className="my-button">
  {mode === "save" ? "Save" : "Cancel"}
</button>`;

  return <Code exampleCode={exampleCode} />;
}

function ClickHereAnswerV2() {
  const exampleCode = `
<!-- In the template where you use the component -->
<MyButton onClick={onClick}>
  Save
</MyButton>

<!-- MyButton -->
<button onClick={onClick} className="my-button">
  {children}
</button>`;

  return (
    <Reveal>
      It is best to avoid adding "modes" to your components. They have a
      tendency to make it so that only JavaScript developers can read the
      template and understand what is going on, because there is so much logic
      involved. Instead, try passing in the display text as a child:
      <Code exampleCode={exampleCode} />
      This way, someone who is reading the template sees something that looks a
      lot like a regular button. Although it is not HTML, it fits into their
      understanding of HTML.
    </Reveal>
  );
}

function ClickHereV3({ classes}) {
  return (
    <button
      onClick={(e) => {
        logEvent("Component element clicked: ", e.target.innerHTML);
        setClicked(true);
        onClick(e);
      }}
      className={classes.reduce((item, acc) => item + '-button ' + acc)}
    >
      Click here
    </button>
  );
}

function ClickHereCodeV3() {
  const exampleCode = `
<button
  onClick={(e) => {
    logEvent("Component element clicked: ", e.target.innerHTML);
    setClicked(true);
    onClick(e);
  }}
  className={classes.reduce((item, acc, '') => item + '-button ' + acc)}
>
  Click here
</button>`;

  return <Code exampleCode={exampleCode} />;
}

function ClickHereAnswerV3() {
	const exampleCode = `
const handleClick = (e) => {
  logEvent("Component element clicked: ", e.target.innerHTML);
  setClicked(true);
  onClick(e);
}

return (
  <button
    onClick={handleClick}
    className={classesString}
  >
    Click here
  </button>	
)
`

  return (
    <Reveal>
			<p>
				There are a couple issues here. The most serious one is that
				it makes team collaboration and visual skimming difficult.
				People on the team who are unfamiliar with this part of the app
				or who don't use JavaScript day-to-day would have a 
				tough time telling what classes this button could possibly have.
				I could use the dev tools to see what ends up in the DOM,
				but even then, I would have to research all possible uses of this 
				component in the app in order to know what is in use.
			</p>
			<p>
				Another smaller issue is that the onClick logic is better off
				assigned to a variable, rather than written right there in
				the markup.
				Why split this up?
				If one developer is working something like adding error handling with
				JavaScript,
				and the other is working on visuals, they would have some pretty
				challenging git conflicts to wade through when everything is entertwined.
				The person working on layout would also have to do a bunch of
				extra scrolling just to get a sense of the HTML hierarchy.
			</p>
			<p>Here's what an improved component would look like:</p>
			<Code exampleCode={exampleCode} />
    </Reveal>
  );
}

function PageExample() {
	// values can be 'Dashboard', 'Reports', 'Events'
	const [page, setPage] = useState('Dashboard')

  return (
		<div className="page-example">
			<button onClick={() => setPage('Dashboard')}>Dashboard</button>
			<button onClick={() => setPage('Reports')}>Reports</button>
			<button onClick={() => setPage('Events')}>Events</button>

			{page === 'Dashboard' && 
				<div>Dashboard Page Component goes here</div>
			}
			{page === 'Reports' && 
				<div>Reports Page Component goes here</div>
			}
			{page === 'Events' && 
				<div>Events Page Component goes here</div>
			}
		</div>
  );
}

function PageExampleCode() {
  const exampleCode = `
function PageExample() {
  // values can be 'Dashboard', 'Reports', 'Events'
  const [page, setPage] = useState('Dashboard')

  return (
    <div className="page-example">
      <button onClick={() => setPage('Dashoard')}>Dashboard</button>
      <button onClick={() => setPage('Reports')}>Reports</button>
      <button onClick={() => setPage('Events')}>Events</button>

      {page === 'Dashbboard' && 
        <div>Dashboard Page Component goes here</div>
      }

      {page === 'Reports' && 
        <div>Reports Page Component goes here</div>
      }

      {page === 'Events' && 
        <div>Events Page Component goes here</div>
      }
    </div>
  );
}
`;

  return <Code exampleCode={exampleCode} />;
}

function PageExampleAnswer() {
  return (
    <Reveal>
			Each time you click on a button, a different page gets displayed.
			However, the URL remains the same. If someone refreshes the page,
			they lose their place.
			This example misses out on one of the most powerful features of the
			web - URLs!
			This app should have a router that changes the URL,
			and new pages need to have the page title assigned.
			Furthermore, those buttons should become a list of links inside
			a nav element, once they are wired up for changing the URL when
			you click them.
    </Reveal>
  );
}

export default function Mistakes() {
  return (
    <div>
      <p>
				Imagine you are doing a PR review of the following code samples.
        Can you spot the things that could be improved? Look for problems with
        HTML markup validity, accessibility, readability, complexity, etc.
				How would you communicate the feedback to someone in a helpful, clear,
				and compassionate way?
      </p>

      <h3>Button click</h3>
      <ClickHereV1 />
      <ClickHereCodeV1 />
      <ClickHereAnswerV1 />

      <h3>Button modes</h3>
      <ClickHereV2 mode="cancel" />
      <ClickHereCodeV2 />
      <ClickHereAnswerV2 />

			<h3>Button logic</h3>
      <ClickHereV3 classes={['something', 'my', 'example']} />
      <ClickHereCodeV3 />
      <ClickHereAnswerV3 />

			<h3>Pages</h3>
      <PageExample />
      <PageExampleCode />
      <PageExampleAnswer />
    </div>
  );
}
