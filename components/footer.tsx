export interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer>
        <div className="gwab">
          <h3>GWAB</h3>
        </div>
        <h5>This is a small project to help others learn about different data structures</h5>
      </footer>
      <style jsx>{`
      footer {
        height: 50px;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #4CAF50;
        color: white;
        font-weight: bold;
        display: flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .gwab, h5 {
        padding: 15px
      }

      .gwab{
        display: flex; 
        width: 25%;
        justify-content: space-between;
        align-items: center;
      }

      `}</style>
    </>
  );
}

export default Footer;