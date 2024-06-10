import { Row } from "antd"
import { Layout } from "../../components/layout/Layout"
import { EmployeeForm } from "../../components/employee-form/EmployeeForm"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/slices/authSlice"
import { useAddEmployeeMutation } from "../../store/services/employees"
import { Employee } from "@prisma/client"
import { Paths } from "../../utils/paths"
import { isErrorWithMessage } from "../../utils/isErrorWithMessage"

export const AddEmployeePage = () => {

  const [ error, setError ] = useState("");
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [ addEmployee ] = useAddEmployeeMutation();

  useEffect(() => {
    if(!user) {
      navigate('/login');
    }
  }, [user, navigate])

  const handleAddEmployee = async(data: Employee) => {
    try { 
      await addEmployee(data).unwrap();
      navigate(`${Paths.STATUS}/created`);
      
    } catch (err) {
      const isError = isErrorWithMessage(err);

      if(isError) {
        setError(err.data.message);
      } else {
        setError('Unknown error')
      }
    }
  }

  return (
    <Layout>
      <Row align='middle' justify='center'>
        <EmployeeForm 
          title="Add Employee"
          btnText="Add"
          onFinish={handleAddEmployee}
          error={error}
        />
      </Row>
    </Layout>
  )
}
