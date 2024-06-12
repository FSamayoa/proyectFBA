import styles from "../equipos/equipos.module.css"

const Multimedia = ()=>{
    return(
        <div>
            <h1 className={styles.titulo}>🚨  🚧  🚧\  Esta sección se encuentra en construccion. /🚧  🚧  🚨</h1>
            <img className={styles.ima} src="https://i.imgur.com/okRoKot.jpeg" alt="error 404"></img>
            <iframe
                width="360"
                height="640"
                src="https://www.youtube.com/embed/w1_vO849jg4?autoplay=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="YouTube Shortsfsfsfs"
            ></iframe>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/w1_vO849jg4"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="YouTube video"
            ></iframe>
            <iframe 
                src="https://www.tiktok.com/@gorditour/video/7364096836497362183" 
                width="360"
                height="640"
                frameborder="0" 
                allowfullscreen
            ></iframe>

          <iframe 
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100064090149296%2Fvideos%2F1049243602763832%2F&show_text=false&width=292&t=0" 
          width="292" 
          height="476" 
        //   style="border:none;overflow:hidden" 
          scrolling="no" 
          frameborder="0" 
          allowfullscreen="true" 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
          allowFullScreen="true"
          ></iframe>
        </div>
    )
}

export default Multimedia