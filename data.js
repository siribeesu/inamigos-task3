const projectData = {
    'seva': {
        title: 'Project SEVA',
        subtitle: 'Providing food and clothing to the underprivileged',
        icon: 'fa-hands-holding-child',
        image: 'https://images.unsplash.com/photo-1593113514676-5911f95a4990?q=80&w=1200&auto=format&fit=crop',
        description: 'Project SEVA is our core initiative focused on hunger relief and providing essential clothing to marginalized communities. We believe that no one should go to sleep hungry. Through regular food distribution drives and clothing donation camps, we aim to bring compassion and dignity to families in need.'
    },
    'bachpanshala': {
        title: 'Project BACHPANSHALA',
        subtitle: 'Ensuring quality education for underprivileged children',
        icon: 'fa-book-open',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
        description: 'Project BACHPANSHALA is dedicated to supporting the education of underprivileged children. We provide digital literacy, life skills training, school support, and basic learning initiatives to bridge the educational divide and nurture young minds for a brighter future.'
    },
    'jeev': {
        title: 'Project JEEV',
        subtitle: 'Animal welfare, rescue, protection, and feeding',
        icon: 'fa-paw',
        image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
        description: 'Project JEEV represents our commitment to animal welfare. We actively feed, rescue, and care for stray animals. By promoting compassion and animal welfare awareness, we strive to create a safer and more loving environment for our voiceless friends.'
    },
    'udaan': {
        title: 'Project UDAAN',
        subtitle: 'Women empowerment through skill development',
        icon: 'fa-dove',
        image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1200&auto=format&fit=crop',
        description: 'Project UDAAN focuses on empowering women in rural and urban communities. Through skill development, vocational training, financial literacy, and entrepreneurship opportunities, we help women achieve financial independence and self-reliance.'
    },
    'prakriti': {
        title: 'Project PRAKRITI',
        subtitle: 'Environmental conservation and sustainability efforts',
        icon: 'fa-leaf',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
        description: 'Project PRAKRITI is our environmental wing. We promote sustainability through extensive tree plantation drives, community clean-up campaigns, and eco-awareness programs, working towards a greener and healthier planet.'
    },
    'vikas': {
        title: 'Project VIKAS',
        subtitle: 'Enhancing employability through skill development programs',
        icon: 'fa-laptop-code',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
        description: 'Project VIKAS provides internships and skill development opportunities for youth. By offering training in areas like digital marketing, finance, research, content writing, and technology, we equip the next generation with real-world skills.'
    }
};

const galleryData = {
    'food': {
        title: 'Food Distribution Campaigns',
        image: 'https://images.unsplash.com/photo-1593113514676-5911f95a4990?q=80&w=1200&auto=format&fit=crop',
        date: 'Ongoing Initiative',
        description: 'Our volunteers actively distribute freshly cooked meals and ration kits to homeless individuals and families in slums. These campaigns not only fight hunger but also bring hope to those struggling to make ends meet.'
    },
    'teaching': {
        title: 'Teaching & Mentoring Children',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
        date: 'Ongoing Initiative',
        description: 'We organize weekend classes and mentoring sessions for children who lack access to quality education. Our curriculum includes basic mathematics, language skills, and interactive learning games.'
    },
    'tree': {
        title: 'Mass Tree Plantation Drives',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
        date: 'Seasonal Initiative',
        description: 'With a goal of planting 20,000+ trees, our plantation drives are community-led events that encourage citizens to take responsibility for local green spaces and combat climate change.'
    },
    'volunteers': {
        title: 'Community Support & Relief',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628ce2751?q=80&w=1200&auto=format&fit=crop',
        date: 'Ongoing Initiative',
        description: 'Our dedicated volunteers are the backbone of InAmigos. They mobilize quickly to provide support during local crises, organize health camps, and lead various community welfare projects.'
    },
    'animal': {
        title: 'Animal Rescue & Welfare',
        image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
        date: 'Ongoing Initiative',
        description: 'Our animal welfare teams conduct daily feeding routes for stray dogs and cows. We also coordinate with local veterinarians to provide medical care and vaccinations for injured animals.'
    },
    'women': {
        title: 'Women Empowerment Workshops',
        image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1200&auto=format&fit=crop',
        date: 'Monthly Initiative',
        description: 'We host workshops focusing on vocational skills like tailoring, handicrafts, and digital literacy. These sessions are designed to build confidence and help women launch their own small businesses.'
    }
};

// Logic to load data on the details pages
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    // Check if we are on the project details page
    if (window.location.pathname.includes('project-details.html')) {
        const data = projectData[id];
        if (data) {
            document.getElementById('detail-title').innerText = data.title;
            document.getElementById('detail-subtitle').innerText = data.subtitle;
            document.getElementById('detail-desc').innerText = data.description;
            document.getElementById('detail-icon').className = `fa-solid ${data.icon}`;
            document.getElementById('detail-image').src = data.image;
        } else {
            document.getElementById('detail-title').innerText = "Project Not Found";
        }
    }
    
    // Check if we are on the gallery details page
    if (window.location.pathname.includes('gallery-details.html')) {
        const data = galleryData[id];
        if (data) {
            document.getElementById('detail-title').innerText = data.title;
            document.getElementById('detail-date').innerText = data.date;
            document.getElementById('detail-desc').innerText = data.description;
            document.getElementById('detail-image').src = data.image;
        } else {
            document.getElementById('detail-title').innerText = "Image Not Found";
        }
    }
});
