const lorem = Array(100)
  .fill(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar, neque vitae dictum tempus, leo tortor porta sapien, nec rhoncus sapien."
  )
  .join(" ");

export default function Contact_Ex09() {
  return (
    <div style={{ fontSize: 18, lineHeight: 1.7 }}>
      <h2>Contact</h2>
      <div>{lorem}</div>
    </div>
  );
}
