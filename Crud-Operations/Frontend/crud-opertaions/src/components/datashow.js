import { Card, Row, Col } from 'react-bootstrap'
import { useAppContext } from '../context/appcontext'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
function Datashow() {
  const { getUser, user } = useAppContext()

  useEffect(() => {
    getUser()
  }, [])
  console.log(user)

  return (
    <>
      <div className='m-5'>
        <Row>
          {user?.map((us) => (
            <>
              <Col xs={12} md={4} className='m-5'>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{us.name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      {us.cgpa}
                    </Card.Subtitle>
                    <Card.Text>{us.department}</Card.Text>
                    <Link to='/edit'>
                      <Card.Link>Edit</Card.Link>
                    </Link>
                    <br />
                    <Card.Link>Delete</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </>
  )
}

export default Datashow
