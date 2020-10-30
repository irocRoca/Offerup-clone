import React from 'react';
import classes from './ImageSlide.module.css'

const ImageSlide = () => {
    return (
        <>
        <div className={classes.contain}>
        <div className={classes.background} style={{backgroundImage: "url(https://photos.offerup.com/SL9K45xuT61Cq5ya4fl1H_56VKk=/600x1028/3662/3662195a37764c81864f9e651b8b5c3f.jpg)"}}>
           <table>
               <tbody>
               <tr className={classes.row}>
                   
                   <td>
                   <img className={classes.image} src="https://photos.offerup.com/kenka7jk6T9rVZ5-ifejl_3duUM=/600x784/5734/57349d3e997b4dfa99a2767472271c71.jpg" alt=""/>
                   </td>
                   {/* <td>
                   <img className={classes.image} src="https://photos.offerup.com/SL9K45xuT61Cq5ya4fl1H_56VKk=/600x1028/3662/3662195a37764c81864f9e651b8b5c3f.jpg" alt="" />
                   </td> */}
               </tr>
               </tbody>
           </table>
           
           {/* <div className={classes.wrap}>
            <div>
                <img className={classes.image} src="https://photos.offerup.com/kenka7jk6T9rVZ5-ifejl_3duUM=/600x784/5734/57349d3e997b4dfa99a2767472271c71.jpg" alt=""/>
            </div>
            <div>
                <img className={classes.image} src="https://photos.offerup.com/SL9K45xuT61Cq5ya4fl1H_56VKk=/600x1028/3662/3662195a37764c81864f9e651b8b5c3f.jpg" alt="" />
            </div>
            </div> */}
        </div>
        </div>
        </>
    )

}

export default ImageSlide;