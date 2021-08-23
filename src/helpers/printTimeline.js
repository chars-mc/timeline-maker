const styleString = `
	body { font-family: "Arial"; }

	.event-card {
		margin: 20px;
		margin-left: 50px;
		position: relative;
		display: grid;
		grid-template-columns: 250px 1fr;
		grid-template-rows: min-content minmax(200px, 1fr);
		gap: 10px;
	}

	.event-card::before {
		content: "";
		background-color: #2E303E;
		position: absolute;
		left: -40px;
		height: 110%;
		width: 3px;
	}

	.event-card::after {
		content: "";
		display: block;
		width: 10px;
		height: 10px;
		border-color: #F09383;
		border-style: solid;
		border-width: 0 0 3px 3px;
		margin-top: -3px;
		left: -25px;
		position: absolute;
		top: 50%;
		transform: rotate( 45deg );
	}

	.event-card__image {
		width: 100%;
		height: 220px;
		border-radius: 5px;
		object-fit: cover;
		object-position: center;
		grid-row: 1 / 3;
	}

	.content {
		display: flex;
		flex-direction: column;
		grid-area: "content";
	}

	time, h3, p {
		margin: 0px;
		margin-top: 5px;
	}

	br,
	.event-card__actions { display: none;}
`;

function getDocumentToPrint(html) {
  const documentWindow = window.open("", "PRINT", "height=600,width=900,");
  const style = document.createElement("style");
  style.innerHTML = styleString;

  documentWindow.document.write("<html><head><title>Timeline Maker</title>");
  documentWindow.document.write("<style>");
  documentWindow.document.write(style.innerHTML);
  documentWindow.document.write("</style>");
  documentWindow.document.write("</head>");
  documentWindow.document.write("<body>");
  documentWindow.document.write(html);
  documentWindow.document.write("</body>");
  documentWindow.document.write("</html>");
  documentWindow.document.close();

  return documentWindow;
}

module.exports = {
  getDocumentToPrint,
};
