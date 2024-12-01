import { blogData } from "../mockData/blogData";

const Header = ({ headerData }) => {
    return (
        <h1
            className="blog__header"
            dangerouslySetInnerHTML={{ __html: headerData }}
        />
    );
};

const Article = ({ arcticleData }) => {
    const {img, alt, date, content, offer } = arcticleData;

    return (
        <>
            <img src= {img} alt= {alt} />
            <div className="article__discription">
                <p className="article__date">{date}</p>
                <h3 className="article__header">{content}</h3>
                <p className="article__offer">{offer}</p>
            </div>
        </>
    );
};

export const Blog = () => {
    const {header, articles} = blogData;
    const [first, second, third, fourth, fifth] = articles;
    return (
        <>
            <h1 className="blog__header">
                <Header headerData={header} />
            </h1> 
            <div className="blog__discription">
            <div className="first__column">
                <Article arcticleData={first}/>
            </div>  
            <div className="second__column">
                <div className="second__article">
                    <Article arcticleData={second}/>
                </div>
                <div className="third__article">
                    <Article arcticleData={third}/>
                </div>
            </div>
            <div className="third__column">
                <div className="fourth__article">
                    <Article arcticleData={fourth}/>
                </div>
                <div className="fifth__article">
                    <Article arcticleData={fifth}/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Blog;