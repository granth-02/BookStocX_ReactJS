import styled from "styled-components";
import book from "./lib.json";

const TechCard = (props) => {
  const openPdf = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

//   Books
  const pdfLinks = [
    {
        pdfUrl:
          "https://drive.google.com/file/d/16c8CMWTGkQI4erHZ1-1Zuik7VZSNdtQn/view?usp=drive_link",
        title: "Digital Logic And Computer Design",
        imageUrl: require("../Images/Book41.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1SM4uPILuvjW_UdayQzuL7z9Ka_QXQI7z/view?usp=drive_link",
        title: "Wiley Publishing - Beginning Programming for Dummies",
        imageUrl: require("../Images/Book42.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1Eu_Niq5XMeGoZhsDJCvwi-4yMdqCLxJE/view?usp=drive_link",
        title: "Web design with html and css",
        imageUrl: require("../Images/Book43.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1Bsk52akSprCisfjt4ggWLytQxifxKNqv/view?usp=sharing",
        title: "Social Media Marketing",
        imageUrl: require("../Images/Book44.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1_T_gDkH2XMParreRanqRFZN5EgOYZvnO/view?usp=drive_link",
        title: "Php Mysql Javascript Html5 All In One For Dummies",
        imageUrl: require("../Images/Book45.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1fBlVUJ3Ri1LteDpMOqC52YGGAwWXyVos/view?usp=drive_link",
        title: "Mastering Photoshop for Web Design",
        imageUrl: require("../Images/Book46.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1F1odz9UpHoYSKCPXX4clrUYaLj-lZ3qF/view?usp=drive_link",
        title: "Data Analysis with Microsoft Excel",
        imageUrl: require("../Images/Book47.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1Ragf47tO8Y4HYOg4yTnFIx2fES52E5lg/view?usp=drive_link",
        title: "Android Programming Tutorials",
        imageUrl: require("../Images/Book48.jpg"),
      },
  ];

  return (
    <div>
      <Card>
        {pdfLinks.map((item, index) => (
          <Wrap key={index} onClick={() => openPdf(item.pdfUrl)}>
            <img src={item.imageUrl} alt="Book" />
            <h2>{item.title}</h2>
            <h3>{item.author}</h3>
          </Wrap>
        ))}
      </Card>
    </div>
  );
};

const Card = styled.div`
  display: grid;
  grid-gap: 30px;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  background-color: #fefbf6;
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  border-radius: 10px;
  background-color: #5a3b5c;
  cursor: pointer;

  &:hover {
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 5px solid #efa0ad;
  }

  img {
    margin-top: 10px;
    border-radius: 5px;
    width: 96%;
  }

  h2 {
    color: #ffccc4;
    text-align: center;
  }

  h3 {
    margin-top: -10px;
    color: #a4cbe2;
    text-align: center;
  }
`;

export default TechCard;
