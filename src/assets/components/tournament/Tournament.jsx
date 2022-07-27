import s from './tournament.module.css';
import thumbnail from "./../../images/tournament/pin.png";
import time from "./../../images/tournament/Time.svg";
import freeRoll from "./../../images/tournament/FreeRoll.svg";
import rapid from "./../../images/tournament/Rapid.svg";
import clock from "./../../images/tournament/clock.svg";
import players from "./../../images/tournament/players.svg";
import tourney from "./../../images/tournament/tourney.svg";


function Tournament() {
  return (
    <article className={s.tournament}>
        <div className={s.wrapp}>

            <div className={s.lable}>
                <p className={s.lableText}>Registering</p>
            </div>

            <div className={s.contentWrapp}>

                <div className={s.blockTop}>
                    <div>
                        <div className={s.tags}>
                            <img className={s.icon1} src={thumbnail}  alt=""></img>
                            <p>NL 2-7 Triple Draw</p>
                            <img className={s.icon2} src={time}  alt=""></img>
                            <img className={s.icon3} src={freeRoll}  alt=""></img>
                            <img className={s.icon4} src={rapid}  alt=""></img>
                        </div>
                        <p>OFC Pineapple</p>
                    </div>                    

                    <button className={s.btn}>Join table</button>
                </div>

                    <div className={s.frameTime}>                    
                        <img  src={clock}  alt=""></img>
                        <span>12:00 pm, 28 July</span>
                    </div>

                

                <div className={s.blockTop}>
                        <div className={s.frameUser}>                            
                            <img className={s.clock}></img>
                            <span className={s.score}  src={players}  alt="">1000/1000</span>
                        </div>

                        <div className={s.frameScore}>
                            <img className={s.clock}  src={tourney}  alt=""></img>
                            <span className={s.score}>1000000</span>
                        </div>

                </div>

                </div>
                
                </div>

        

    </article>
  );
}

export default Tournament;