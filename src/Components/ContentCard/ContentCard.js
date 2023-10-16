  import React from 'react'
  import "./ContentCard.css"
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEnvelope, faPhone, faUser, faTrashCan, faPen, faPenToSquare } from '@fortawesome/free-solid-svg-icons'


  function ContentCard({title, date, content, deleteBlog,enableEditMode, index}) {
    return (<>
   
  <div class="Blog-card">
          <div class="Blog-image"></div>
          <div class="Blog-info">
              <h2>{title}</h2>
              <h4>{date}</h4>
              <p>{content}</p>
    
   <button className='Edit-btn btn'
    onClick={()=>{
      enableEditMode(index);
    }
    }
    >Edit
    </button>
    <button className='Delete-btn btn'
    onClick={()=>{
      deleteBlog(date);
    }
    }>delete
    </button>    
  
          </div>
          </div>

      </>
    )
  }

  export default ContentCard


