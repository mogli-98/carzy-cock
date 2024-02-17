import React from 'react';
import "../../assets/css/legend.css";
import lightcock from '../../assets/image/legends/lightcock.png';
import linebg from '../../assets/image/legends/linebg.png';
import aftertext1 from "../../assets/image/legends/aftertext1.png";
import aftertext2 from "../../assets/image/legends/aftertext2.png";
import aftertext3 from "../../assets/image/legends/aftertext3.png";
import aftertext4 from "../../assets/image/legends/aftertext4.png";
import aftertext5 from "../../assets/image/legends/aftretext5.png";
import aftertext6 from "../../assets/image/legends/aftertext6.png";
import aftertext7 from "../../assets/image/legends/aftertext7.png";
import aftertext8 from "../../assets/image/legends/aftertext8.png";
import aftertext9 from "../../assets/image/legends/aftertext9.png";
import aftertext10 from "../../assets/image/legends/aftertext10.png";
import Section003 from "../../assets/image/recipe/Section03.svg";
export const legends = () => {
    return (
        <>
            <section className='legendbg' >

                <center>
                    <div className='legendtopbox1'>
                    <div className="legendtopbox">
                        <img src={lightcock} alt="" height={"100px"} />
                        <h1>THE LEGEND OF
                            <br />
                            CRAZY COCK

                        </h1>
                        <h6 style={{textTransform: "capitalize"}}>
                            The story of Crazy Cock harks
                            <br />  
                            back to the 15th century.

                        </h6>
                        <p className='pb-5 small'><u>READ THE FULL STORY</u></p>
                    </div>
                    </div>
                </center>

            </section>
            <section>
                <img src={linebg} alt="" className='linebg' />
            </section>
            <section className='fullbg afterbanner 'style={{backgroundColor:"#eae5g5"}}>
                <div className='textpart'>
                    <p>Legend has it that a peacefull little town was abuzz with the news of a theft of large</p>
                    <p>amounts of silver  from an influential landowner. Quite predictably, the incident had </p>
                    <p>thrown the town in a state of frenzy</p>
                </div>
                <img src={aftertext1} alt="" className='aftertext1' />
                <img src={aftertext2} alt="" className='aftertext2' />
                <div className="textpart2">
                    <p>Since the landowner was powerful and  no local would dare commit an act of unpardon-</p>
                    <p>able offence against him, doubts were cast on a traveller who was passing by,</p>
                    <p>en route to a pilgrimage</p>
                </div>
                <img src={aftertext3} alt="" className='aftertext3' />
                <img src={aftertext4} alt="" className='aftertext4' />
            </section>
            <section className='fullbg afterbanner1' style={{backgroundColor:"#eae5g5"}}>
                <img src={aftertext5} alt="" className='aftertext5'/>
                <img src={aftertext6} alt="" className='aftertext6'/>
               <center>
               <img src={Section003} alt="" className='ontext1' />
               </center>
                <p className='textpart3'>
                    Soon enough, faccd with mounting pressurc from citizens tor
                    justice, he was arrested and sentenced to death. Not quite the
                    sort to go down without being offered a chance, the pilgrim
                    requested for a meeting with the magistrate who had sentenced
                    him. Under obligation to grant the pilgrim his final wish, he was
                    cscorted to the magistrate's house and presented to him, as the
                    magistrate played host to an elaborate banquet with his friends.
                    Facing the magistrate, the pilgrim swore his innocence.
                </p>
                <p className='textpart3' >"What reason do I have to believe you?", enquired the magistrate.</p>
                <br />
                <div className='text-center textpart4'>
                <p>He pointed to a cooked Rooster on the table and exelaimed,<br />
                    "The Roester woukd erow at the haur of my hanging as proof</p>
                <p>
                Everyone roared with laughter and mocked the pilgrim. <br />
                The judge ignored the statement and set aside the Rooster since he had lost his appetite.
                </p>
                <p>When the time tor judgment came, the pilgrim was brought to the gallows.
                    <br />
                    But, right betore the executioner could deliver his judgement, the unthinkable happened.
                </p>
                </div>
                <img src={aftertext7} alt="" className='aftertext7' />
                <img src={aftertext8} alt="" className='aftertext8' />
                <center>
                <p className='textpart5'>
                Much to everyone's amazement, the roasted Rooster stood on the table in ront ot the erowd and erowed,
just as the pilgrim had predicted. Realisation dawned upon the judge who rushed to the pilgrim's rescuc.
Fortunately, the cord was loose and the pilgrim escaped his death, pretty much unscathed.
                </p>
                </center>
                <center>
                    <img src={aftertext9} alt="" className='aftertext9' />
                    <p className='textpart6'>
                    To this day, the Rooster is considered a symbol of faith.
                    <br /> good luck and justice across many parts of the world.
                    </p>
                    <hr className='textpart8' />
                    <p className='textpart7'>
                    Crazy Cock is an ode to the legendary Rooster. <br />
                    Crazy Cock traels the world sporting a monocle, korping an eye on the finer uhings in life. <br />
                    Those whe haoe experienood it confess that Cnazy Cock comes alivr in uncapected nays. <br />
                    A loe like the legendary Roaster
                    </p>
                    <hr className='textpart9' />
                </center>
               
             
            </section>
            <img src={aftertext10} alt=""  className='aftertext10'/>
            
        </>
    )
}
export default legends