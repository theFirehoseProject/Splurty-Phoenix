defmodule Splurty.Quote do
  use Ecto.Model

  schema "quotes" do
    field :saying, :string
    field :author, :string
  end
end
