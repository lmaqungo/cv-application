import { v4 as uuid } from 'uuid'

export const templateEducation = (school='', course='', startDate='', endDate='', description='') => {
    return {
      id: uuid(), 
      school: school, 
      course: course, 
      startDate: startDate, 
      endDate: endDate, 
      description: description
    }
}

export const templateJob = (position='', company='', startDate='', endDate='', description='') => {
    return {
        id: uuid(), 
        position: position,
        company: company,
        startDate: startDate,
        endDate: endDate,
        description: description
    }
}

export const templateSkill = (content='') => {
    return {
        id: uuid(),  
        content: content
    }
}

export const templateSection = (sectionName='', sectionItems = [], linkItems = []) => {
    return {
        id: uuid(), 
        sectionName: sectionName, 
        sectionItems: sectionItems,
        linkItems: linkItems
    }
}

export const templateSectionItem = (content='') => {
    return {
        id: uuid(), 
        content: content
    }
}

export const templateLinkItem = (href='', linkContent='') => {
    return {
        id: uuid(), 
        href: href, 
        linkContent: linkContent
    }
}