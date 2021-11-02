import styled from "styled-components";

const ImageDisplay = (props: any) => {
  const ImgStyle = styled.img`
    border: 2px solid white;
    border-radius: 10px;
  `;
  const imgs = ["762.png", "8932.png", "1787.png", "235.png"];
  return (
    <div className="text-white mt-3" style={{ marginBottom: "70px" }}>
      <div>
        <div>example bags:</div>
        {imgs.map((img, idx) => (
          <ImgStyle
            key={idx}
            className=" mx-3 my-3"
            alt="img"
            width="300px"
            src={img}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
