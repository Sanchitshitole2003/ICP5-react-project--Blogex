import './popularsample.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import images1 from './image4.jpg';
export default function Tea() {
    return (

        <>
            <Navbar />
            <div className='mainsampleparent'>
                <h1 className='heading'>Tea is life</h1><br />
                <h2 className='by'>By: Shraddha Sharma</h2><br /><br />
                <div className='sampleparent'>
                    <div>
                        <img className='sampleimg' src={images1} />
                    </div>
                    <div className='sampletext'>
                        Tea is the most popular beverage in the world after water.
                        It’s a simple preparation of pouring hot water over cured leaves of the Camellia sinensis plant.
                        The first recording of tea described it as a medicinal beverage in China in the 3rd century AD.
                        Merchants helped its popularity to spread quickly across continents.
                        In the early 19th century, Great Britain popularized the concept of afternoon tea,
                        a break from one’s routine in which tea is served alongside sandwiches and baked goods such as scones.
                        The flavor of tea varies by where the tea leaves are harvested and how they are grown and processed.
                        Black tea is the most popular worldwide, followed by green, oolong, and white tea
                        <br /><br />
                        <h2>Spotlight on tea and antioxidants</h2>
                        Polyphenols, or flavonoids, are likely a key component to what makes tea a healthful drink.
                        These chemical compounds act as antioxidants, which control the damaging effects of free radicals in the body.
                        Free radicals can alter DNA by stealing its electrons, and this mutated DNA can increase LDL cholesterol or alter cell membrane traffic—both harmful to our health.
                        Though green tea is often believed to be richer in polyphenols than black or oolong (red) teas, studies show that—with the exception of decaffeinated tea—all plain teas have about the same levels of these chemicals,
                        albeit in different proportions. Green tea is richest in epigallocatechin-3 gallate whereas black tea is richest in theaflavins; research has shown that both can exert health benefits.
                        Herbal teas contain polyphenols as well but will vary highly depending on its plant origin.
                        Indeed, one reason for conflicting results in observational studies may be the wide variations in tea types with varying flavonoid content.Where the tea leaves are grown,
                        the specific blend of tea leaves, type of processing, and addition of ingredients such as milk, honey, and lemon can alter specific flavonoid content.
                        How accurately people report their tea intake (e.g., type, amount, brew strength) and their overall diet (e.g., do they eat other foods rich in flavonoids?) are other factors that need to be clarified as they can affect study results.
                        <br /><br />
                        <h2>Is decaffeinated tea healthy?</h2>
                        Decaffeinated tea is an option if you enjoy the flavor and experience of tea but are sensitive to caffeine.
                        People have varying sensitivity to caffeine but it is classified as a stimulant that has the potential to affect the nervous system and heart rate, and cause jitteriness.
                        In general, traditional teas already have about half the caffeine of coffee and even less if the brewing time is shorter.
                        To decaffeinate tea, there are different methods. One process uses an organic chemical solvent (either ethyl acetate or methylene chloride) that also removes most of tea’s polyphenols.
                        The residual amount of the chemical after processing is minimal to none, and no research has shown negative health effects.
                        Another method called “effervescence” uses water and carbon dioxide, which retains the majority of polyphenols. Both methods apply the chemical or gas onto moistened tea leaves, which bonds to the caffeine; when the leaves are dried, the caffeine evaporates along with the solvent/gas.
                        If you wish to know which processing method is used, check the package label or contact the manufacturer.

                        Herbal teas are naturally caffeine-free and do not undergo a decaffeination process.

                        Most research looks at the health effects of traditional teas, not decaffeinated. 
                        Decaffeinated tea may lose polyphenols that are associated with health benefits, depending on the processing method. 
                        Polyphenol content varies widely among teas even before the decaffeinated process, so it is hard to know the exact amount that remains. 
                        Regardless of decaffeination type, tea is still considered a healthful beverage choice.
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}