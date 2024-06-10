import { PlusCircleOutlined } from "@ant-design/icons"
import { AppButton } from "../../components/app-button/AppButton"
import { Layout } from "../../components/layout/Layout"
import { Table } from "antd"
import { useGetAllEmployeesQuery } from "../../store/services/employees"
import type { ColumnsType } from "antd/es/table"
import { Employee } from "@prisma/client"
import { useNavigate } from "react-router-dom"
import { Paths } from "../../utils/paths"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/slices/authSlice"
import { useEffect } from "react"

const columns: ColumnsType<Employee> = [
  {
    title: 'Name',
    dataIndex: 'FirstName',
    key: 'firstName',
  },
  {
    title: 'Age',
    dataIndex: 'Age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'address',
  }
]

export const EmployeesPage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllEmployeesQuery();
  const user = useSelector(selectUser);

  useEffect(() => {
    if(!user) {
      navigate('/login')
    }
  }, [user, navigate]);

  const onAddEmployee = () => {
    navigate('/employees')
  }

  return (
    <Layout>
      <AppButton type="primary" onClick={onAddEmployee} icon={<PlusCircleOutlined />}> 
        Add employee
      </AppButton>
      <Table 
        loading={isLoading}
        dataSource={data}
        columns={columns}
        rowKey={record => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${Paths.EMPLOYEE}/${record.id}`)
          }
        } }
      />
    </Layout>
  )
}
