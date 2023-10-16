import React, { useEffect, useState } from 'react'
import './ContentHome.css';
import ContactCard from '../../../src/Components/ContentCard/ContentCard';
import showToast from 'crunchy-toast';
import './WhatsApp Image 2023-10-14 at 13.17.20_e8a49290.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

export default function ContentHome() {
  const [blogs, setBlogs] = useState([
   
    {
      title: 'Cricket has become entertainment; other professions are also in line ',
      date: 'OCTOBER 15, 2023 17:32 IST',
      content: 'Last weekend, I went to Chennai to watch the World Cup cricket match between Indian and Australia. There were six of us, friends from senior secondary school, when we used to watch cricket full time and study part time. We were proud of our ability to watch sports over five days without losing our bearings. I met a German one day who said why can’t you and your friends indulge in ‘active sports’, as he called it. Sure, anyone can engage in active sports; it’s the art of watching a sport for several hours while staying immobile that’s more difficult.'
    },
    {
      title: 'The new track is the extension of Sonakshi Sinha and Yo Yo Honey Singh’s previous song "Desi Kalaakar".',
      date: 'October 15, 2023 22:20 ',
      content: 'Rapper Yo Yo Honey Singh dropped his song “Kalaastar” on Sunday featuring Sonakshi Sinha. “Kalaastar” is the extension of Sonakshi and Yo Yo Honey Singh’s previous song “Desi Kalaakar”.'
    },
    {
      title: 'Ahead of World Food Day, try these 3 exciting fusion recipes',
      date: 'October 15, 2023 19:30',
      content: 'Someone rightly said, “Food is love, food is life,” because we indeed can’t live without it. Celebrating the essence of food, its tantalising flavours and importance for health is World Food Day, observed every year on October 16.While we love cuisines from around the world, there is nothing quite like ‘ghar ka khaana’. But sometimes this regular home-cooked food can become dull and boring, so we’ve specially curated for you three traditional Indian recipes with a unique twist, courtesy of Dheeraj Mathur, cluster executive chef, Radisson Blu Hotel Kaushambi, Delhi.'
    },
  
  ])

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [editIndex, setEditIndex] = useState('-1 ');
  const [isEditMode, setIsEditMode] = useState(false);

  const addBlog = ()=>{
    if(!title){
      showToast('Title is required', 'warning', 3000);
      return;
    }
    if(!date){
      showToast('Date is required', 'warning', 3000);
      return;
    }
    if(!content){
      showToast('Content is required', 'warning', 3000);
      return;
    }
      const obj ={
      title: title,
      date: date,
      content: content
    }

    const newBlog = [...blogs, obj];

    setBlogs(newBlog);
    saveToLocalStorage(newBlog); 

    showToast('Blog has been Saved Successfully', 'success', 3000);

    setTitle('');
    setDate('');
    setContent('');

    
  };

  const deleteBlog = (cardNumber) => {
    let indexToDelete = -1 ;

    blogs.forEach((blogDetail, index )=> {
      if(blogDetail.card === cardNumber){
        indexToDelete = index;
      }
    })

    blogs.splice(indexToDelete, 1);
    saveToLocalStorage(blogs);

    setBlogs([...blogs]);
    showToast('Blog Has Been Deleted Successfully', 'success', 3000);

  };

  const saveToLocalStorage = (blogsData) => {
    localStorage.setItem('blogs', JSON.stringify(blogsData));
  };

  const loadFromLocalStorage = (blogsData) => {
     blogsData = JSON.parse(localStorage.getItem('blogs'));

    if(blogsData){
      setBlogs(blogsData);
    }
  };

  const enableEditMode = (index) => {
    const blogsData = blogs[index];

    setTitle(blogs.title);
    setDate(blogsData.date);
    setContent(blogsData.content);

    setEditIndex(index);
    setIsEditMode(true);
  };

  const editBlog = () => {
    const obj = {
      title: title,
      date : date,
      content : content
    }

    blogs[editIndex] = obj;

    setBlogs([...blogs]);

    saveToLocalStorage(blogs);

    showToast('Contact Edited Successfully', 'success', 3000);

    setTitle('');
    setDate('');
    setContent('');

    setIsEditMode(false);
  };

  useEffect(()=>{
    loadFromLocalStorage();
  },[])


  return (
    
    <div className='content-holder'>
    <Navbar/>
<div className='banner'>

</div>
<div>
      <h1 className='app-title'>“Inspire The Author Within You”</h1>
      
      <div className='app-body'>
        <div className='add-contact'>
          <h1 className='add-contact-heading'>
            { isEditMode ? 'Edit Blog' : 'Add Blog'}
          </h1>

          <form className='add-contact-form'>
            <input 
              type='text' 
              placeholder='Title' 
              className='user-input'
              onChange={(e)=>{
                setTitle(e.target.value);
              }}
              value={title}/>

            <input 
              type='tel' 
              placeholder='Date' 
              className='user-input'
              onChange={(e)=>{
                setDate(e.target.value);
              }}
              value={date}/>

            <input  id= 'ContentBox'
              type='text' 
              placeholder='Content' 
              className='user-input'
              onChange={(e)=>{
                setContent(e.target.value);
              }}
              value={content}/>

          </form>
          <button 
            className='add-btn' 
            type='button'
            onClick={()=>{
              isEditMode ? editBlog() : addBlog()
            }}
            >
            { isEditMode ? 'SAVE' : 'SAVE'}

          </button>
        </div>

        <hr/>

        <div className='show-contact'>
          <h1 className='show-contact-heading'>All Blogs</h1>
          {/* <form className='search-input'>
          <input type='text' placeholder='Search Blog..' className='search-bar' />
          </form> */}
         
          <div>
          {/* <div className='card-container'> */}
            {
              blogs.map((blog, index) => {
                const {title, date, content } = blog;
                return (
                <ContactCard key={index}
                title={blog.title} 
                date={blog.date} 
                content={blog.content}
                deleteBlog={deleteBlog} 
                enableEditMode={enableEditMode}
                index={index} />
                )
              })
            }

          </div>

        </div>
      </div>

      <hr/>
      <p className='app-desc'>&copy; 2023 MY CONTACT APP</p>
      
 
    </div>
    </div>
  )
}


