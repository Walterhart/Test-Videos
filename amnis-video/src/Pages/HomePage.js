
import { useEffect, useState } from 'react'
import { supabase } from '../config/supabaseClient'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from('test')
        .select('*')
      
      if (error) {
        setFetchError('Could not fetch the users')
        setUsers(null)
      }
      if (data) {
        setUsers(data)
        console.log("we have data?")
        console.log(users)
        setFetchError(null)
      }
    }

    fetchUsers()

  }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      
    </div>
  )
}

export default Home