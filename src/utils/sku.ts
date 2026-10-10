export const getSkuList = <T>(...args: T[][]) =>
  args.reduce((a, b) => a.flatMap(d => b.map(e => [...d, e])), [[]] as T[][])

export const getSkuOpt = (
  specs: AnyObject[],
  selected: AnyObject,
  skuList: AnyObject[]
) => {
  return specs.map((spec, i) =>
    spec.options.filter((val: string) => {
      const test = { ...selected, [specs[i].key]: val }
      return skuList.some(sku =>
        Object.entries(test).every(([k, v]) => !v || sku.info[k] === v)
      )
    })
  )
}
