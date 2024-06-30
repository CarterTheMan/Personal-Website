import React from 'react';
import './JavaDescriptions.css';

export const GeneticAlgorithmWordsDescription: React.ReactNode = 
<div className='javaDescriptions'>
    <p>This is a program that takes a phrase that the user inputs and starting with a random “population”, it mirrors evolution in real life, to reach the users starting input. For this explanation we will say that the users input is “hello world”. </p>
    <ol>
        <li>
            The program starts out with an initial “population” which is made of “individuals”. Each individual is made of characters, which can be called “genes”.
        </li>
        <li>
            Then for each individual it determines their “fitness” based on how many characters from that individual match the users input
            <ul>
                <li>For example “jells mirld” would have a fitness of 6</li>
            </ul>
        </li>
        <li>
            Then it creates a fitness array that contains each individual based on their fitness.
            <ul>
                <li>An individual with a fitness of 6 would be in the fitness array 6 times while something with a fitness of 0 wouldn’t be in the array.</li>
            </ul>
        </li>
        <li>
            Next is reproduction, which randomly selects two “parents” from the fitness array and creates a child based on the two adults.
            <ul>
                <li>If the parents are “hecks worth” and “jello wirld” the child could potentially be “hello world”</li>
            </ul>
        </li>
        <li>
            The final step is mutation which could randomly change single letters in each individual.
            <ul>
                <li>“hello thire” could mutate and become “hello there” if the “i” in thire becomes an e</li>
            </ul>
        </li>
        <li>
            Repeat steps 2-5 until the desired outcome. Each time you go through those steps it’s called a generation.
        </li>
    </ol>
</div>

export const GeneticAlgorithmRocketsDescription: React.ReactNode = 
<div className='javaDescriptions'>
    <p>
        This program has three main classes but really only two are needed. The Main class and Rockets class are both required, but the avgPoints class is not necessary for this program to work. This is a program the somewhat follows evolution in real life to arrive at the end point. The objects moving in this program are called “rockets” which are represented as red ovals on the screen.
    </p>
    <p>
        The way the rockets work is in 4 basic steps that repeat themselves.
    </p>
    <ol>
        <li>The first step is the rockets actually moving. Now the rockets change their position based on two arrays of X and Y values, respectively. So each frame the rocket’s position changes according to the X and Y value in the array at that position. These X and Y arrays could be seen as the genes of the rocket (since this is similar to evolution). After the amount of time in each generation runs out the final position is recorded.</li>
        <li>Next the program determines the fitness of each rocket based on how close its final position is to the target. The closer to the target the rocket is, the higher its fitness is and based on that an array-list is created and it is added into this array list equal to the number of its fitness. So if a rocket has a fitness of 55, it is added into the fitness array-list 55 times. This makes it more likely that this rocket is chosen in the next step.</li>
        <li>The next step is creating a child. Two parents are chosen, hopefully ones of higher fitness, and a a child is created. This child contains a random mix of the X and Y values that the parents had. The choosing of two random parents ensures that each child is unique and hopefully has a higher fitness than the ones of its parents.</li>
        <li>The fourth step is mutation. This is completely random and changes based on each child. Basically, each child’s genes are put in and random parts of those genes could be changed. This helps to ensure that there is an element of randomness in each rocket’s genetics and this hopefully will guide the child to have a higher fitness.</li>
    </ol>
    <p>
    So that was how the rockets work, but the next part are the average point (called avgPoints). These are represented as green (current generation) and yellow (last generation). This combines the median points of all rockets in each frame and makes a dot at that average point. This allows the user to more visually see how the rockets are getting closer and closer to the target goal in the end. After many generations, the rockets can usually get within 20 points of the target. This is very good, but the closer the average end pint is, the smaller the change will be between this point and the last one. To change the target point, You only need to change the targetX and targetY variables.
    </p>
</div>

export const GravityDescription: React.ReactNode = 
<div className='javaDescriptions'>
    <p>
        This is a Java program that uses the JPanel, JFrame, Color and and Graphics class to show the effect gravity has on planets in the program. The program is split into three main class. Each one has a very important role.
    </p>
    <ol>
        <li>
            The Main class which extends JPanel. This class has three main methods within it.
            <ol>
                <li>The first method if the paintComponent() method which is responsible for showing the actual graphics on the window. It always sets the background to white, setting the colors of each planet, actually drawing the planet and then having each planet feel the force of attraction of each other planet. Finally, when the time to reset happens, this method also handles that</li>
                <li>Then second method is the dist() method which just finds the distance between two methods using the distance formula</li>
                <li>The final method in this class is the main() method. This method is responsible for creating the window to display the graphics in and creates the all the initial planets.</li>
            </ol>
        </li>
        <li>
            The second class it the planet class which is controls the color, size (mass), position, velocity, acceleration and effect of gravity for each planet. (If the explanation here doesn’t make sense, check the third class which is called PVector)
            <ol>
                <li>The first method is update() which calls another methods edges, adds the acceleration vector to the velocity vector and the adds the velocity vector onto the position vector.</li>
                <li>The second method is attract(). This method is actually responsible for the gravity between planets. The way this works takes a lot of explanation but the most basic way to explain that it finds the directs of effect from gravity and then finds the force of gravity and using that direction and force, creates a vector of the effect of gravity. This vector is then added to the acceleration vector.</li>
                <li>The next method is edges() which is responsible for stopping the planets when they reach the border of the window so that they don’t go off screen.</li>
                <li>The last method is color which is responsible for keeping the color of the planet.</li>
            </ol>
        </li>
        <li>
            The last class is the PVector class. This class represents a vector by taking in a x and y value and each value represents a distance. These explained methods will explain the non-set/get methods.
            <ol>
                <li>The first method is mag() which calculates the magnitude of the vector using the Pythagorean theorem</li>
                <li>The next method is the normalize() method which sets the magnitude of the vector to 1</li>
                <li>The add(), subtract(), multiply() and divide() methods all change the vector as a whole depending on an input. For example, the multiply(double d) method multiplies the vector by a scalar which in this case is d.</li>
            </ol>
        </li>
    </ol>
    <p>
        You cant change the amount of planets spawned in each generation by changing the size variable. You can also change the range of sizes by changing the maxSize and minSize variables. To change how long each generation lasts you can change the resetRate variable.
    </p>
</div>

export const MazeDescription: React.ReactNode = 
<div className='javaDescriptions'>
    <p>
        This is a program that allows the user to either make a maze themselves or choose from a pre-made maze file. Once the maze is created the user can then choose from different search algorithms as to what they want to use to solve the maze. Currently, I have a breadth first search, a depth first search and an A* search working. The searches are slowed so the user cans see how the search works. The following is the longer explanation of how the program works.
    </p>
    <p>
        The program has two main ways to create the maze.
    </p>
    <ol>
        <li>The first way is completely visual. The user is presented with a window and clicking on that window will allow them to create the maze. The first click places the start cell, the second click places the end cell and any click after that places walls. This allows the user to make the maze look any way they want.</li>
        <li>The second way is to choose the maze from pre-made files. The user only needs to enter the file of the maze that the user wants to run.</li>
    </ol>
    <p>
        Next the user can choose which kind of search they want to use. Currently, the program has three main searches. The first is the breadth first search, the second is the depth first search and the last one is the A* search.
    </p>
    <ol> 
        <li>A breadth first search works by using a queue for choosing which cells to search. A queue is a FIFO data structure which means that it can only add items to the back and can only remove items from the front. Check the image below for an example. This search enqueues maze cells which are empty and are touching the cell that has just been searched. Anytime an empty cell is added to the queue, it is also given a parent which is the touching cell that has just been searched. Then it keeps searching the cells in the front of the queue until it finds the ending cell. Once the end is reached, it traces from the end to the beginning using the parent cells. This creates the path and gives a solution.</li>
        <div className='javaDescriptionsImage'>
            <br />
            <img src={process.env.PUBLIC_URL + '/projectimages/java/Maze-BFS.jpg'} alt="Data Queue Example" />
            <br />
            <br />
        </div>
        <li>A depth first search works by using a stack for choosing which cells to search. A stack is a LIFO data structure which means that is can only add items to the to of the stack and can only remove items from the top. The best way to compare this is to a stack of pancakes. You can only add a pancake to the top and when you grab one, it would also be from the top. See the image below for an example. This search adds items to the top of the stack (Called pushing) and takes items off the top of the stack (called popping). With a search like this, the computer will follow a path through to its completion before moving on. When a cell is added to the stack, it is also given a parent which is the touching cell that has already been searched. It keeps searching the cell that was most recently add. This way, when the search reaches the end of a trail, it will search the next trail. It keeps doing this until it reaches the ending cell of the maze. Once the end is reached, it traces from the end to the beginning using the parent cells. This creates the path and gives a solution.</li>
        <div className='javaDescriptionsImage'>
            <br />
            <img src={process.env.PUBLIC_URL + '/projectimages/java/Maze-DFS.jpg'} alt="Data Stack Example" />
            <br />
            <br />
        </div>
        <li>An A* (called an A Star) search algorithm is fairly easy to understand. It finds the distance between the searched cell and the starting cell (called the gCost) and the distance between the searched cell and the ending cell (called the hCost). To determine which cell the maze searches, the maze adds the hCost and gCost to find the fCost. Whichever cell has the lowest fCost is searched next. If two searchable cells have the same fCost then it chooses the one with the lowest hCost. Using this way of searching cells, it will arrive at the shortest path every time. The only disadvantage of this kind of search is that it requires the individual cell to know where the end is. The other two searches don’t require this so they can search any maze from just a starting point. This is the main disadvantage of this kind of search. However, since it’s using mathematics to choose which cell to search next, it is the fastest search. The images below show the math that the programs uses for the search.</li>
        <div className='javaDescriptionsRow'>
            <div className='javaDescriptionsColumn'>
                <img src={process.env.PUBLIC_URL + '/projectimages/java/Maze-AStar-Tile.jpg'} alt="AStar Tile Example" />
            </div>
            <div className='javaDescriptionsColumn'>
                <img src={process.env.PUBLIC_URL + '/projectimages/java/Maze-AStar.jpg'} alt="AStar Example" />
            </div>
        </div>
    </ol>
    <p>
        You can change the size of the maze by changing a few of the variables. You can change the size of each maze cell by changing cellSize. This makes each cells size equal to cellSize * cellSize. You can also add on more maze cells by changing cellAmount. This makes the amount of cells in a maze equal to cellAmount * cellAmount. This means all cells must be perfect squares and all mazes are also perfect squares. Below is the color of maze cells and what they represent.
    </p>
    <ol>
        <li>Green = Starting cell. This is where the search starts, as the name implies</li>
        <li>Red = Ending cell. When the search reaches this cell, the search traces a path back to the beginning</li>
        <li>Black = Wall cell. These are cells the searches won’t look at.</li>
        <li>White = Unsearched cell. Still needs to be looked at by the search. When searched by the computer, it becomes a searched cell.</li>
        <li>Light gray = Searched cell. The algorithm has looked at this cell and found it not to be the ending cell.</li>
        <li>Yellow = Trace cell. These are the cells that, when the end has been found, trace the route from the ending cell to the beginning.</li>
    </ol>
</div>