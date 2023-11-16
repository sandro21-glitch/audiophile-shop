

const CartHeader = () => {
  return (
    <header className="flex justify-between w-full mb-10">
              <h5 className="text-black mb-0 uppercase font-medium text-[1.1rem]">
                Cart <span>(1)</span>
              </h5>
              <button className="underline text-text">Remove All</button>
            </header>
  )
}

export default CartHeader