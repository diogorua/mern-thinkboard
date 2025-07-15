import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import NotesNotFound from '../components/NotesNotFound'

// Functional component
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false); // State to manage rate limiting
  const [notes, setNotes] = useState([]);  // State to hold notes data
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get('/notes');
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log('Error fetching notes');
        if (error.response.status === 429) {
          //If the error status is 429, set isRateLimited to true
          setIsRateLimited(true);
        } else {
          toast.error('Failed to load notes');
        }
      } finally { // Ensure loading state is set to false after fetching successfully or not
        setLoading(false); 
      }
    };

    fetchNotes();
  },[]);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {/* Display RateLimitedUI only if isRateLimited is true */}
      {isRateLimited && <RateLimitedUI />}

      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}

        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage;