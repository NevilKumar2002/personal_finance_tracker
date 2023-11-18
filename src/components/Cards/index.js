import React from "react";
import "./style.css"
import { Card, Row } from "antd";
import Button from "../Button";
let CurrentBalance =0;
let income=0;
let expenses=0;
function Cards({showExpenseModal,showIncomeModal}){
    return(
    <>
    
    <Row className="my-row">
        <Card bordered={true} className="my-card">
            <h2>Current Balance</h2>
            <p>₹ {CurrentBalance}</p>
            <Button text="Reset Balance" blue={true} />

        </Card>
        <Card bordered={true} className="my-card">
            <h2>Total Income</h2>
            <p>₹ {income}</p>
            <Button text="Add Income" blue={true}  onClick={showIncomeModal} />
              
           

        </Card>
        <Card bordered={true} className="my-card">
            <h2> Total Expenses</h2>
            <p>₹ {expenses}</p>
            <Button text="Add Expense" blue={true} onClick={showExpenseModal} />
        </Card>

       </Row>
   
    </>
    )
}
export default Cards;

//  onClick={reset} onClick={showIncomeModal} onClick={showExpenseModal}