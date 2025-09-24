import { useEffect, useState } from "react";
const TryTag = () => {
    const tagNames = ["Inspiration", "Life", "Faith", "Love", "Motivation", "Success", "Happiness", "Courage", "Hope", "Gratitude", 'Peace', 'Strength', 'Kindness', 'Compassion', 'Forgiveness', 'Joy', 'Patience', 'Wisdom', 'Trust', 'Friendship', 'Family', 'Adventure', 'Creativity', 'Dreams', 'Growth', 'Resilience', 'Self-care', 'Mindfulness', 'Empathy', 'Determination', 'Optimism', 'Balance' ,'Health', 'Wellness', 'Learning', 'Curiosity', 'Imagination', 'Invention', 'Discovery', 'Exploration', 'Innovation', 'Change', 'Transformation', 'Leadership', 'Teamwork', 'Community', 'Service', 'Generosity', 'Charity', 'Volunteering', 'Environment', 'Sustainability', 'Nature', 'Travel', 'Culture', 'History', 'Tradition', 'Heritage']; 
    const [tags, setTags] = useState([]);

    useEffect(() => {
        setTags(tagNames);
    },[])

    return (
        <div> 
            <h3>TRY TAGS</h3>
            <div className="d-flex flex-wrap justify-content-center " style={{maxWidth:'400px', margin:'auto'}}>
                {tags.map((tag, index) => (
                    <span key={index} className="badge bg-secondary m-1 p-2" style={{cursor:'pointer'}}>{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default TryTag;