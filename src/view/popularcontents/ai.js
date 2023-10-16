import './popularsample.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import images3 from './imagep3.jpg';
export default function Ai() {
    return (

        <>
            <Navbar />
            <div className='mainsampleparent'>
                <h1 className='heading'>Artificial Intelligance V/S Humans</h1><br />
                <h2 className='by'>By: Arun Prabhudesai</h2><br /><br />
                <div className='sampleparent'>
                    <div><div></div>
                        <img className='sampleimg' src={images3} />
                    </div>
                    <div className='sampletext'>
    <h2>Nature</h2>                    
Historically, human intelligence has naturalized the idea of adapting to different environments through a combination of cognitive processes. That is how human beings interact with the world. Furthermore, they engage with others to form a dependent cluster of social relationships.

On the other hand, the nature of AI is characterized by codes designed to emulate human intelligence and behavior. Its final goal is creating a digital world that can effectively accomplish the jobs performed by humans. Also, when it comes to solving problems, AI is highly equipped to understand issues and solve them instantaneously. Meanwhile, the nature of human intelligence, on the other hand, takes time to acclimatize itself to the changing situations at hand, eventually adapting to them.

Thus, when it comes to nature, the primary objective of AI is to promote human-like thinking. For natural intelligence, the primary focus is observing the changing conditions and responding to them appropriately.

<br/><br/>
<h2>Functionality</h2>
In the human intelligence vs. artificial intelligence debate, functionality is important. People utilize the brain’s processing power, memory, intuition, experiential knowledge, and other cognitive talents to think and act. AI-powered devices depend solely on data, algorithms, and specific instructions to generate results.

The underlying concept of human intelligence is consciousness, a product of logic and emotions. However, AI’s functional logic is governed by strict codes minus the ability to feel or process emotions.
<br/><br/>
<h2>Learning Power</h2>
Human intelligence is adept at abstract thinking. The very foundation of human civilization has been the ability to feel, observe, understand, and change. Through this process, emotions interact with logic to drive conclusions that satiate the rational faculties of human beings.

AI lacks the ability to perform abstract thinking. This prevents robots from contemplating or acquiring opinions on any specific issue. Moreover, their learning power depends on repetition and exposure to thoroughly researched information. For instance, self-driving cars learn from unsupervised learning and reinforcement learning methods. Instead of memories of driving experiences, they have certain encoded value systems which determine their functionality and learning power.
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}