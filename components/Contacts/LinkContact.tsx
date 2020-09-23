

const LinkContact: React.FC = () => {
    return (
        <div className="linkContact">
            <a href="https://github.com/abdallahgeha" className="linkedContact github"><div className="icon"/><h4>Github</h4></a>
            <a href="https://www.linkedin.com/in/abdallah-geha-29a30185/" className="linkedContact linkedin"><div className="icon"/><h4>LinkedIn</h4></a>
            <a href="https://www.facebook.com/aboud.giha/" className="linkedContact facebook"><div className="icon"/><h4>Facebook</h4></a>
            <a href="mailto:geha.abdallah.dev@gmail.com" className="linkedContact email"><div className="icon"/><h4>Email</h4></a>
            <style jsx>{`

            .linkContact{
                width: 40%;
                border-radius: 20px;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                padding: 50px;
            }      

            .linkContact > a {
                height: 100% ;
                width: 92%;
                color: white;
                margin: 10px;
                border-radius: 18px;
            }

            .github {background : black}
            .linkedin {background : #0072b1}
            .facebook {background : #3b5998}
            .email {background : #c71610}

            .linkedContact {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 22px;
            }

            div.icon {
                height: 40px;
                width: 40px;
                margin-left: 20px;
                background : #999999;
            }

            h4 {
                flex-grow: 2;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 10px 0;
            }

             `}</style>
        </div>
    );
}

export default LinkContact;