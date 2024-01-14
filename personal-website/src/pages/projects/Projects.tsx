import './Projects.css';
import FlipCard from './../../components/flipcard/FlipCard'

export default function MyApp() {
    



    return (
        <div className='projects-container'>
            <FlipCard title='test' description='test' imagePath='/My-Experience.jpg'/>
            <FlipCard title='test' description='test' imagePath='/My-Experience.jpg'/>
            <FlipCard title='test' description='test' imagePath='/My-Experience.jpg'/>
            <FlipCard title='test' description='test' imagePath='/My-Experience.jpg'/>
            <FlipCard title='test' description='test' imagePath='/My-Experience.jpg'/>
        </div>
      );
}