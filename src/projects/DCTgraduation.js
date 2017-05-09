import React, { Component } from 'react';
import PageLayout from '../elements/PageLayout';
import ListCards from '../elements/ListCards';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import TitleIntro from '../elements/ArticleLayouts';
import Progress from '../elements/Progress';
import SimpleCards from '../elements/SimpleCards';
import PicCards from '../elements/PicCards';
import WhiteBlock from '../elements/WhiteBlock';

import Cover from '../../public/Image/Article_img/DCT/cover.jpg';
import Logo from '../../public/Image/Article_img/DCT/logo.png';
import Start from '../../public/Image/Article_img/DCT/ani_start.gif';
import Girl from '../../public/Image/Article_img/DCT/ani_girl.gif';
import Phone from '../../public/Image/Article_img/DCT/ani_phone.gif';
import Diary1 from '../../public/Image/Article_img/DCT/diary1.jpg';
import Diary2 from '../../public/Image/Article_img/DCT/diary2.jpg';
import Diary3 from '../../public/Image/Article_img/DCT/diary3.jpg';
import Diary4 from '../../public/Image/Article_img/DCT/diary4.jpg';
import Box1 from '../../public/Image/Article_img/DCT/box1.png';
import Box2 from '../../public/Image/Article_img/DCT/box2.jpg';
import Mirror1 from '../../public/Image/Article_img/DCT/mirror1.jpg';
import Mirror2 from '../../public/Image/Article_img/DCT/mirror2.jpg';
import Mirror3 from '../../public/Image/Article_img/DCT/mirror3.gif';


class DCTgraduation extends Component {
  render() {
    return (

        <PageLayout>

          <WhiteBlock>
                <TitleIntro
                  title = "自戕宿舍"
                  date = "2015/9/15"
                  type = "Interaction Design"
                />
          </WhiteBlock>

          <WhiteBlock>
                <div className="passage passage_content">
                  <h2>Concepts & Info of Total Graduation Project</h2>
                  <p>“Differance”, the name of our sixth session graduation project, indicates the consistent production, conversion, disappearance and dissolution of meaning itself. <br />Twelve students in two groups joined the exhibition of graduation project.</p>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <img className="writing_pic" src={Cover} />
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <table className="ts stackable table">
                    <tbody>
                        <tr>
                            <td>Topic</td>
                            <td>自戕宿舍</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Jessica Tseng</td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>Sep, 2015 ~ Dec, 2016</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>Graduation project in a group of six</td>
                        </tr>
                        <tr>
                            <td>Form</td>
                            <td>Interaction Game</td>
                        </tr>
                        <tr>
                            <td>Goal</td>
                            <td>To experience a room escape game with digital art and technology</td>
                        </tr>
                    </tbody>
                </table>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h2>Concepts of Tzu-Chiang Domitory</h2><br />
                  <p>Sometimes, we misunderstand the emotion between others and our own self negligible, while in others’ view, it means so much to them. We shouldn’t ignore people who cares so much about you, because sometimes our neglection may kill a person.</p>
                  <PicCards
                  cardNum = ""
                  cardImg = {Logo}
                  cardDescription = "A lock and a key symbolize the image of a chamber, with a half-closed door symbolize the escape from chamber." />
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h2>Basic info</h2><br />
                  <p>Our DCT graduation project of interaction design is a four-puzzled room escape game based on different techniques of technology in a group of six.</p>
                  <p>The background setting of the story is about a university female student committed suicide in the dormitory. Players in a group of three or four should find out the reason of her death through a series of clues in order to escape from her dormitory.</p>
                  <img className="writing_pic" src={Start} />
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h2>Game Flow</h2><br />
                  <p>The arrangement of the puzzles consist of a diary, a music box, a mirror and a computer. Players will watch a preamble of the protagonist’s death before entering the room.<br /><br /> The clue in the diary lead to the password of the music box. While opening the music box, the picture of a 3D projection mapping implied users to hold the diary with a rabbit picture in front of the mirror.<br /><br /> When the webcam on the mirror detected the rabbit from the diary, a dialogue video will be played on the screen. Players can interpret the context of the protagonist’s background story.<br /><br /> Once the video ends, a photo of the couple with a breach in the middle will be displayed on the ground.<br /><br /> A puzzle should be found out and be put on the breach. Once the puzzle is at the right location, the figure of the female ghost will appear on the wall, telling player the reason of her suicide and allow the player to leave the room. <br /><br />In contrast, if the players do not solve the clues within 20 minutes, the bad ending will be played, which the female ghost saying that she will follow the player forever.</p>

                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h2>Main Elements of the Project</h2><br /><br />
                  <h4 className="small_topic">1. Preamble animation</h4>
                  <p>A girl committed suicide. The male protagonist saw the news, recalling the childhood memory of him and the girl as he walked back to his dorm. Yet, as he opened the door, he found out that he was actually in the room of the girl! <br /><br />He has to find out the reason of the girl’s death through a series of clues in order to escape from the room. The players should play the role of the male protagonist, finding answers through the remains that the girl left.</p><br />
                  <img className="writing_pic" src={Girl} /><br /><br />
                  <img className="writing_pic" src={Phone} />
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">2. Diary</h4>
                  <p>The cover of the diary is filled with bloodstain. The first page is a picture of a bloody rabbit, which is an important clue of the music box and the mirror. The other page mentioned a music box that the boy gave the girl as a birthday gift. The last page is the puzzle of the password for the music box.</p>
                    <div className="ts segment">
                        <p>The alphabet on the diary can be solved as “SOS” and be changed into numbers “619”, which is the password to open the lock of the music box.</p>
                    </div><br /><br />
                    <div className="ts four cards">
                      <div className="image"><img height="175px" src={Diary1} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="image"><img height="175px" src={Diary2} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="image"><img height="175px" src={Diary3} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="image"><img height="175px" src={Diary4} /></div>
                    </div>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">3. Muxic Box</h4>
                  <p>The main technique of the music box is 3D Holographic Projection. We did an experiment by putting a transparent pyramid on the cell phone with a specific picture. Yet, we considered the projection too small to see. Thus, we came up with an advanced holographic projection, which is consist of two transparent pyramids.</p><br />
                  <div className="ts two cards">
                    <div className="image"><img height="230px" src={Box1} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="image"><img height="230px" src={Box2} /></div>
                  </div>
                </div>
          </WhiteBlock>
          <WhiteBlock>
                <div className="passage passage_content">
                  <h4 className="small_topic">4. Mirror</h4>
                  <p>The mirror puzzle, which I was responsible for, adapted the technique of object detection. When the webcam detected the rabbit picture on the diary, a video of a dialogue between two main characters will be played.</p><br />
                  <div className="ts three cards">
                    <div className="image"><img height="190px" src={Mirror1} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="image"><img height="190px" src={Mirror2} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="image"><img height="190px" src={Mirror3} /></div>&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
          </WhiteBlock>


        </PageLayout>

    );
  }
}

export default DCTgraduation;
