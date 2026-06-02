
const generateDefaultValues = () => ({
    firstName: 'John', 
    lastName: 'Doe', 
    jobTitle: 'Software Engineer', 
    phoneNumber : '+27 34 345 0328',
    emailAddress : 'jd@gmail.com', 
    github: 'https://github.com/jdoe', 
    personalWebsite: 'jdoe.com', 
    location: 'Vancouver, Canada',
    profileSummary :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie risus at mattis finibus. Donec efficitur in massa vitae egestas. Nulla facilisi. Mauris sollicitudin enim pellentesque neque fringilla molestie. Pellentesque luctus vestibulum facilisis. Fusce luctus, eros eu molestie vehicula, sem nisi sollicitudin sem, et venenatis lectus diam id odio. Maecenas maximus finibus quam, nec facilisis orci scelerisque ut. Nulla tellus metus, posuere in tincidunt ac, viverra nec felis.',
    job1:{
        position: 'junior software engineer',
        company: 'Google LLC',
        startDate: 'Jan 2025' ,
        endDate: 'Dec 2028',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie risus at mattis finibus.\nDonec efficitur in massa vitae egestas. Nulla facilisi. Mauris sollicitudin enim pellentesque neque fringilla molestie.\nPellentesque luctus vestibulum facilisis. Fusce luctus, eros eu molestie vehicula, sem nisi sollicitudin sem, et venenatis lectus diam id odio' 
    },
    education1: {
        school: 'Stanford University' ,
        course: 'Bachelors of Science in Computer Science', 
        startDate: 'Feb 2018' , 
        endDate: 'Nov 2021' , 
        description: 'Aenean vulputate dolor id turpis aliquet faucibus. Sed vulputate tellus dui, tristique suscipit arcu gravida nec.\nCras sit amet metus eu sapien semper cursus. Donec finibus tincidunt pellentesque. Cras nec euismod ex.\n Mauris pretium, neque non elementum consequat, turpis ex sollicitudin est, eu pulvinar libero mi et dui. Mauris eleifend diam id mollis ornare.'
    },
})

export { generateDefaultValues }