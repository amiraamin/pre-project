import React, {Component,Fragment} from 'react'
import  styles from "./style.module.css";
import axios from "axios"
import LocationMap from '../LocationMap/LocationMap'
import MainSection from '../MainSection/MainSection';
class Home extends Component  {
state={allArticles:[]};
async componentDidMount(){
        let {data} = await axios.get(
           "https://newsapi.org/v2/top-headlines?country=us&apiKey=c52e01a0ac7d45a78b4f12c74a48fecc"
        );
        console.log(data.articles);
        this.setState({
            allArticles:data.articles,
        });
        console.log(this.allArticles)
    }
    render() {
        return(
            <Fragment>
                  <div className={styles.content}>
    </div>
    
    <LocationMap/>
    <MainSection/>

    

   
    
            </Fragment>
        );
    }
}



export default Home;