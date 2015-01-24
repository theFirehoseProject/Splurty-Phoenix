defmodule Splurty.View do
  use Phoenix.View, root: "web/templates"

  # The quoted expression returned by this block is applied
  # to this module and all other views that use this module.
  using do
    quote do
      # Import common functionality
      import Splurty.Router.Helpers

      # Use Phoenix.HTML to import all HTML functions (forms, tags, etc)
      use Phoenix.HTML
    end
  end

  def csrf_token(conn) do
    Plug.Conn.get_session(conn, :csrf_token)
  end
  
  # Functions defined here are available to all other views/templates
end
