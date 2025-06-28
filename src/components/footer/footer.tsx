import WideContainer from "../container"

export default function Footer() {
  const copyDate = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 text-white dark:bg-muted dark:text-muted-foreground">
      <WideContainer className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>Box</div>
          <div>Box</div>
          <div>Box</div>
          <div>Box</div>
        </div>
      </WideContainer>
      <div className="text-center py-2 border-t border-gray-800">
        <p className="text-xs">&copy; {copyDate} | Ben Andrews</p>
      </div>
    </footer>
  )
}

