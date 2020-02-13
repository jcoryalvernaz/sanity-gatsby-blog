export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'siteMetadata',
      type: 'siteMetadata',
      title: 'Site Metadata'
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'author'}]
    }
  ],
  preview: {
    select: {
      title: 'siteMetadata.title'
    }
  }
}
