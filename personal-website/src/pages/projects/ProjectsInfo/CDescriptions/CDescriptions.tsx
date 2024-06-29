import React from 'react';
import './CDescriptions.css';

export const CandyShopDescription: React.ReactNode = 
<div className='cDescriptions'>
    <p>
        A candy store owner keeps his inventory of candy organized in a flat text file using his own home brew format. This format is given here with each item on its own line of text in the file. Note also that there can be multiple candies, each enclosed in a START, END pair.
    </p>
    <p>
        For this program the user enters: candy “filename” with “filename” being the name of the input file. The input file should be formatted as follows:
    </p>
    <ul>
        <li>START</li>
        <li>Candy Name</li>
        <li>Candy Type</li>
        <li>Price Type</li>
        <li>Price</li>
        <li>Color</li>
        <li>Amount</li>
        <li>Calories</li>
        <li>END</li>
        <li></li>
        <li>START</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>END</li>
    </ul>
    <p>
        The program reads all of the candies on the input file, and then does three things to them:
    </p>
    <ol>
        <li>Prints out all of the candies sorted by the total price with the highest total price being at the top. When it prints out the items it includes the items name, how much is in stock and its total price.</li>
        <li>Prints out the total cost of all of the candies in the inventory</li>
        <li>Prints out the total number of each type of candy within the inventory</li>
    </ol>
</div>