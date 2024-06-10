import { Button, Result, Row } from "antd";
import { Link, useParams } from "react-router-dom"

const statuses: Record<string, string> = {
  created:'Created successfully',
  updated:'Updated successfully',
  deleted:'Deleted successfully'
}

export const StatusPage = ( ) => {
  const { status } = useParams();

  return (
    <Row align='middle' justify='center' style={{width: '100%'}}>
      <Result 
        status={status ? 'success' : '404'}
        title={status ? statuses[status] : 'Not found'}
        extra={
          <Link to='/'>
            <Button type='primary'>Back</Button>
          </Link>
        }
      />
    </Row>
  )
}
