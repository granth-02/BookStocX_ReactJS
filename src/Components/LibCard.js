import styled from "styled-components";

const LibCard = (props) => {
  const openPdf = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  const pdfLinks = [
    {
      pdfUrl:
        "https://drive.google.com/file/d/1B3ZSrCr7Mgk81-hNOMcnCypznQoSlPdf/view?usp=sharing",
      title: "Divergent",
      author: "Veronica Roth",
      imageUrl: require("../Images/Book1.jpg"),
    },
    {
      pdfUrl:
        "https://drive.google.com/file/d/1qvzDwVr3PXCh72EEh9xx8kDLnwyJyVeZ/view?usp=sharing",
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      imageUrl: require("../Images/Book2.jpg"),
    },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1PMbd8Vg2A_MfE-YpRqxwf1usjEbpK82i/view?usp=sharing",
        title: "David and Goliath",
        author: "Malcolm Gladwell",
        imageUrl: require("../Images/Book3.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/19LvNqCkS3myU_Uxe2-W4OXFyyf6wLZb8/view?usp=sharing",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        imageUrl: require("../Images/Book4.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1BDH18VKOyBlCIh8KdsZ2WPWX2Pn9Pm66/view?usp=sharing",
        title: "Les Miserables",
        author: "Victor Hugo",
        imageUrl: require("../Images/Book5.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1Bsk52akSprCisfjt4ggWLytQxifxKNqv/view?usp=sharing",
        title: "The Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        imageUrl: require("../Images/Book6.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/19LvNqCkS3myU_Uxe2-W4OXFyyf6wLZb8/view?usp=sharing",
        title: "The Great Gatsby",
        author: "F.Scott Fitzgerald",
        imageUrl: require("../Images/Book7.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1A7BaUq9AEWeQp5V2ioifyrmXI6lrPKl7/view?usp=sharing",
        title: "Three Mistakes Of My Life",
        author: "Chetan Bhagat",
        imageUrl: require("../Images/Book8.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1Y1KPRl7oykG9UDuPEm7rTZyDcGesz1J7/view?usp=sharing",
        title: "The Triumphant Church",
        author: "Kenneth E.Hagin",
        imageUrl: require("../Images/Book9.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1upaSnQI2_nqQ0h0MhKKv69pjjfhAp58u/view?usp=sharing",
        title: "One Indian Girl",
        author: "Chetan Bhagat",
        imageUrl: require("../Images/Book10.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1wFNb7NQgVo2qoO-Exh2a9SHfaO8B8IOM/view?usp=sharing",
        title: "Half Girlfriend",
        author: "Chetan",
        imageUrl: require("../Images/Book11.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1T6NR8LGWmnSH0LN4VXB-u4j7UyRtx7vA/view?usp=sharing",
        title: "Allegiant",
        author: "Veronica Roth",
        imageUrl: require("../Images/Book12.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1Up4Q0MABod3N6N_2iNa1CwkRCqNPLitr/view?usp=sharing",
        title: "Insurgent",
        author: "Veronica Roth",
        imageUrl: require("../Images/Book13.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1ukIMmx7UVMsVMLfWrk0NZBcT2AsGbXCn/view?usp=sharing",
        title: "Death On Nile",
        author: "Agatha Christie",
        imageUrl: require("../Images/Book14.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/12C_-4O0TQu-YdR7hBNvmVH5c6l3CcpS4/view?usp=sharing",
        title: "Murder On Orient Express",
        author: "Agatha Christie",
        imageUrl: require("../Images/Book15.jpg"),
      },
    {
        pdfUrl:
          "https://drive.google.com/file/d/1NOJ3x_V0w93yumRRMX2ZOhHThOMvM8cB/view?usp=sharing",
        title: "Charlie And The Chocolate Factory",
        author: "Roald Dahl",
        imageUrl: require("../Images/Book16.jpg"),
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
  margin-top: 30px;
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

export default LibCard;
