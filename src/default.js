
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
    section1: {
        sectionName: 'Languages',
        sectionItems: ['isiZulu', 'seSotho']
    }
})

export { generateDefaultValues }