class Contact < ApplicationRecord
  belongs_to :venue

  def as_json(options = {})
    return super(include: :venue)
  end
end
