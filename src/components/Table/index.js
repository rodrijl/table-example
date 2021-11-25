import React,{useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getData } from "../../actions/actions";

import { Table } from 'semantic-ui-react'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TableExampleStriped = () => {
  const data = useSelector((store) => store.data)
  const filters = useSelector((store) => store.filters)
  const dispatch = useDispatch();

  useEffect( () => {
    getData(dispatch,filters)
  }, [dispatch,filters])

  return(
    <div>
    {!data ? ("No data found") : (
    <Table striped>
      <Table.Header positive>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Link</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((post,index) =>(
          <Table.Row key={index}>
            <Table.Cell>{post.API}</Table.Cell>
            <Table.Cell>{post.Description}</Table.Cell>
            <Table.Cell>{post.Category}</Table.Cell>
            <Table.Cell>
              <a href={post.Link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEye}/></a></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    )}
</div>
  )
}

export default TableExampleStriped
