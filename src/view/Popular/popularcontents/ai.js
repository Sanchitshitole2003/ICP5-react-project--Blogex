import './popularsample.css';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import images3 from './../imagep3.jpg';
export default function Coding() {
    return (

        <>
            <Navbar />
            <div className='mainsampleparent'>
                <h1 className='heading'>Artificial intelligance v/s Human</h1><br />
                <h2 className='by'>By: Arun Prabhudesai</h2><br /><br />
                <div className='sampleparent'>
                    <div>
                        <img className='sampleimg' src={images3} />
                    </div>
                    <div className='sampletext'>
                        Think Out of the Box and decorate the world, requirement is, you will have to just face a computer. This sounds thrilling, exciting and great, isn’t it? Software, programming, coding, all these terms show up one after another or say parallel. Imagine, sketch and program it, build a humungous software or just create a SPA (Single Page Application), use HTML, CSS and JavaScript or apply multiple frameworks, libraries and other programming languages, there is no limit.
                        <br />
                        Expand your coding with classic C#, modern Java or shrink it importing plugins or collaborating with more efficient Python Strategy, you got to do what that software or App ultimately supposed to be doing that particular job of purpose.
                        <br />
                        Your idea should not be volatile, it has to be simple and clean coded ( not ambiguous). You will never get a badge of a valuable programmer by writing complex, tedious and intimidated program rather you more likely be awarded by just following the path that has to be covered, measured and result oriented.
                        <br />
                        Now programming platforms have been exploding, sometimes making difficult for senior programmers or engineers to commit to the languages that they are going to pick to compile a program or write a software from scratch. What to choose, which to choose and how to choose, you have to be clear what you are going to do.
                        <br />
                        Nobody going to demote you if you just picked Vanilla JavaScript to accomplish the goal. And unfortunately, even you apply C++ or Django to develop a web frame and ultimately that fails, folks will look at you and question will be why did that not function? They will never question what React JS components you just used, none will appreciate you. And the Vanilla wins the race :).
                        <br />
                        So, DRY (Don’t Repeat Yourself) and try not to exaggerate and brag yourself by showing all the skills you have and putting all at once than just weighing and stepping in one or two at a time and make things work. Now it’s all up to you, your monkey, your circus. Take it easy, guys!!!



                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}