# frozen_string_literal: true

class ExampleReflex < ApplicationReflex
  delegate :uuid, to: :connection

  def save(content)
    item = element.signed[:sgid]
    item.update!(content: content)
    morph element, render(partial: "home/contenteditable.html.erb", locals: {item: item})
  end
end
