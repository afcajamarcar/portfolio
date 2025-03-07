import Card from './Card'

const Experiences = async () => {
  const experiences: any = []

  return (
    experiences?.map((experiences: any) => {
      const {
        title,
        subtitle,
        upperNote,
        note,
        items,
        badges,
      } = experiences
      return (
        <Card
          key={title}
          title={title}
          subtitle={subtitle}
          upperNote={upperNote}
          note={note}
          items={items}
          badges={badges}
        />
      )
    })
  )
}

export default Experiences
