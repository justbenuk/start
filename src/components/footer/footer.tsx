export default function Footer() {
  const copyDate = new Date().getFullYear()

  return (
    <footer>
      <div className="text-center py-2 border-t">
        <p className="text-xs">&copy; {copyDate} | Ben Andrews</p>
      </div>
    </footer>
  )
}

